[![Build Status](https://travis-ci.org/turingschool/full-circle.svg?branch=master)](https://travis-ci.org/) [![Code Climate](https://codeclimate.com/github/turingschool/full-circle/badges/gpa.svg)](https://codeclimate.com/github/codeclimate/codeclimate) [![security](https://hakiri.io/github/turingschool/full-circle/master.svg)](https://hakiri.io/github/turingschool/full-circle/master)

# Full Circle: Turing's Diversity Scholarship Application

This application assists in streamlining and automating the application process for Turing's Diversity Scholarship Program.

## Dependencies
- Ruby 2.4.1
- Rails 5.1.3
- React 2.2.1

## Setup

If you don't have ruby 2.4.1 or greater first install this using your Ruby version manager of choice: $ `rvm install 2.4.1`

Now: `git clone https://github.com/turingschool/full-circle.git`

Run `bundle update`. If all goes well setup the database: `rake db:create db:migrate` and optionally: `rake db:seed`

Install figaro: $ `bundle exec figaro install` and then add to the created application.yml file your Github OAuth credentials:
```Ruby
GITHUB_CLIENT_ID:
GITHUB_CLIENT_SECRET:
```

Finally, run the test suite: $ `rspec`

To install client side dependencies:

* `brew install yarn`
* `yarn`

Then set up rails:

* `sudo gem install rails`

Finally, to run the application locally:

* `rails s`

## Deployment

Make sure the tests are passing on
[Travis CI](https://travis-ci.org/turingschool/full-circle) and then deploy to Heroku staging
followed by production.

To deploy to staging: `git push staging master`. To deploy to production: `git
push heroku master`.

The above assumed you have `staging` and `heroku` remotes set up to point to the
below Heroku apps.

The app runs on Heroku and has a staging and a production environment.

The staging app is called turing-full-circle-staging and can be found at
[https://full-circle-staging.turing.io](https://full-circle-staging.turing.io)
The production app is called turing-full-circle and can be found at
[https://full-circle.turing.io](https:/full-circle.turing.io)

## How the App Works
> This section describes how the app works and it's structure. Here is where you can find what code does what and where to find it.

#### Basic Structure

Full Circle is really 3 single page apps in one. Each user has their own dashboard: Student, Reviewer, and Admin. When a user first logs in via the homepage portal they will be redirected to the dashboard that corresponds to their _role_ **(found in controller/concerns/authorize.rb).**
- A student will be rerouted to `student/dashboard`, and will not be able to visit the reviewer or admin dashboard.
- A reviewer will be rerouted to `reviewer/dashboard` and will not be able to visit the admin dashboard, but can visit the student dashboard.
- An admin will be rerouted to `admin/dashboard`, and can navigate to all other dashboards.

Once a user has entered a dashboard we are no longer in Rails but in React. All React components will be found in the `app/assets/javascript/components` folder. Each dashboard lives in their corresponding folder with shared components living in the shared folder.

#### User Authentication
`See user testing for additional Spec information on Auth/Auth.`
> Files that include OAuth flow:
> - config/initializers/omniauth.rb
> - app/models/concerns/oauth_user.rb
> - app/controllers/concerns/authorize.rb
> - app/controllers/session_controller.rb

OAuth happens right now via the omniauth gem with a github provider **(found in the omniauth.rb config file)**. The hope is this will make moving to the Census provider somewhat painless.

When a user clicks on the login button on the homepage this initiates the Github callback loop. When a user is Authorized they are rerouted through the session_controller. When a session is created a user is then rerouted based on their role **(found in authorize.rb)**

A user in the Full Circle database will maintain state with the OAuth provider. If they change their name on Github, it will also change in Full Circle. When a user logs in, all information is updated in this way from the provider. This information can be found in oauth_params in oauth_user.rb. When a change is needed for the User model's attributes, these can be updated here and should not effect anything else.

#### User Authorization
> Files that include Authorization
> - controller/concerns/authorize.rb
> - app/controllers/api_controller.rb
> - app/controllers/application_controller.rb
> - app/models/jw_token.rb

Because this is a Rails-React app user Authorization happens in two places in two ways:

1. When a user logs in via the homepage and a new session is created the user is authorized before rerouting to the correct dashboard. All users are defaulted to a student. **Rerouting and user checks can be found in authorize.rb**.

2. Prior to a user entering a dashboard the user_id is converted to a JWT token **(found in application_controller.rb)** and stored in the client as 'user_id'. This is then used for all calls to the API side of the app. The user token is sent in a header as `Authorization: Bearer <token>`. On the api side this comes in as `request.env['HTTP_AUTHORIZATION']` **(found in api_controller.rb)**. Once the token is decoded and parsed the user is then pulled from the database and scoping of the role can be achieved by calling user.<role>?.

## React Components

This section covers React Components, their organization, shared use, and architecture.

> All React Components are found in the app/assets/javascript/components

> React is integrated with rails using the Rails-React gem. This gem deals with React by pulling it into the asset-pipeline. This means that you don't ever need to import React into files, export components out of files, or care very much about folder structure at all. Make a React Component and it will be automatically available anywhere. This has draw-backs. Mainly that incorporating webpack based packages are pain and I've avoided using them. This means that I've been forces to only use packages that are asset-pipeline friendly and can be loaded via a gam.

#### Organization

All components can be found in app/assets/javascript/components. This file is loaded via component.js in app/assets/javascript, which is subsequently loaded via application.js.

You might have noticed the 'ping' folder which includes ping.js.jsx holding some generic methods for making API requests. You can include any file in the javascrips folder and application.js will load it allowing you access to those methods on a global scope. By adding the jsx we can seamlessly use these methods in our React components.

Components are organized into five main sub folders, Homepage, Admin, Reviewer, Student, and shared. Sections of each page are then put into subfolders in an attempt to makes their use more obvious. Hopefully that's true.

To make sure components never collide with one another all student components are started with Student, admin components Admin, and reviewer components Reviewer. This gets a little verbose, but helps to scope components.

#### handleAction Pattern

One of the tricky aspects of React is dealing with state changes among deeply nested components. For larger applications Redux can be used, but since this application isn't that big an alternative has been created instead.

Most "base" components of the page has one very simple method called 'handleAction'. This function takes an object that contains a key/value structure to match that of React's setState().

This makes changing state relatively painless. Assuming that you'll be handling all state changes from this base Component, you can handle any state change with it by sending it up the component chain and calling it at any point.

To use it you must send the method the key/value you want to change the state of, which requires a little bind weirdness. When you do finally call it will look like this: **this.props.handleAction.bind(this, {key: value})**. On action this call the handleAction method and initiate a state change.

#### handleChange Pattern

Changing state based on Javascrip's _event_ needs to be handles a little differently than just making key: value since we also need access to the event itself.

Typically this is used when you want to capture a change in a text field, or the event.target.value.

To do this you'll need to rely on React's onClick prop, and then understand, again, the weirdness of bind.

React's onClick is much like Javascrip's thing.on('click', function()). The callback function is what you make onClick equal to. To make a universal onChange function you'll need to build the key: value pair by sending the key and then just using the event in the function.

```Javascript
handleChange(key, event) {
  this.setState( {[key]: event.target.value} )
}
```

To call the function: `onClick={this.props.handleChange.bind(this, 'key')}`. You don't need to send the event since onChange automatically sends that at the end of the params sent to the receiving function. This is captured as event in the handleChange function.

#### Shared components

Components that can be used anywhere are stored in the Shared folder. Most of these rely on the "handleAction" pattern.

Name: **ClickBtn** <br>
Description: **Creates a clickable button that will execute a function.** <br>
Props:
 - onClick: (Function) What will be executed on button click.
 - Text: (String) Text that will be displayed in button body.
 - readOnly: (Boolean) Defaults to false. True will disable button.

Name: **LinkBtn** <br>
Description: **Creates a clickable button that will reroute to a link.** <br>
Props:
- Url: (String) Full Url of redirect on button Click.
- Text: (String) Text that will be displayed in button body.
- readOnly: (Boolean) Defaults to false. True will disable button.

Name: **StaticTextField** <br>
Description: **Creates a formatted static text row.** <br>
Props:
- label: (String) Row label.
- text: (String) Text of row.
- width: (String) Width of row. Must include %, px, vw, etc.. ('100%')

Name: **SelectableTextField** <br>
Description: **Creates a formatted text selectable row.** <br>
Props:
- texts: (Array) The texts that will be displayed in the row. Must be held in an array, even if just one text.
- width: (String) Width of row. Must include %, px, vw, etc.. ('100%')
- returnKey: (String) The key that will match a state change.
- returnValue: (String, Array, Object) The thing that will be replaced in the state change.
- handleAction: (Function) The function that will executed when row is selected.<br>

Name: **DropDownMenu** <br>
Description: **Creates a drop down menu from a list of objects.** <br>
Props:
- list: (Array) All of the objects that will be selectable from the drop down menu.
- header: (Object) The initial object that will be displayed in the header of the drop down menu.
- label: (String) The attribute of the object that will be displayed in the drop down rows.
- handleAction: (Function) The function that will handle the selection of a row.
When a row is selected the drop down menu will build an object { item: selectedObject } that can be used to change state.

## Stylesheets

> Everything is scss and Flexbox is the main layout tool used. Flexbox everywhere!

Because I hate Bootstrap, I rolled all my own Stylesheets. Sorry if this kills you a little.

Stylesheets are organized in folders and should be more or less easy to locate. For the most part styles in each folder should make sense why they are there. Other times it won't make sense. At the very least, fussy searching for a style class should be easy and the class should not be much of a mystery.

Shared React Components have their own Mixin, found in the stylesheets/components folder. When you add a shared Component in React you will also need to @include the corresponding style in it's parent.

I tried to make each .scss file as small as possible. I have also repeated styles when they could have been shared in a single file. This is mostly to reduce the chance of breaking styles elsewhere. When you change a style you should have a pretty good idea of what it's actually going to change, and not
change for that matter.

Because scss allows us to nest classes I have "scoped" each page to keep things from messing with other things. All admin classes are wrapped in .admin, reviewer in .reviewer, and student in .student. Seems a little redundant, but it makes you stress less about adding and changing styles.

## Testing

This section covers some of what is in the testing suite that may not be obvious. Testing React in a Rails environment isn't awesome and requires a few extra hurdles to jump through.

> The testing environment uses RSpec and Capybara with Poltergeist to handle Phantomjs. It's slow, but easy to write and easy to test and does not require any additional setup on your end.

***As of now Phantomjs does not support Javascript ES6. This means that unless you want to go down some very dark roads testing React Components is not possible. When support of ES6 is supported, Feature testing should be really easy and integrate very nicely with Capybara.***

> All testing configs for middle-wear will be found in rails_helper.rb. This includes Shoulda-Matchers, Capybara/Poltergeist, and Omniauth

Unit testing covers most Ruby written code, and is fairly straight forward. Feature testing covers some higher level functionality on the user's end.

#### User authentication and authorization

> features/homepage/user_can_log_in_spec.rb

Omniauth mocks a user's credentials and fakes a callback authentication with a provider. What Omniauth returns is found in the rails_helper.rb under Omniauth.config. If a different provider is used you may need to update these to match what the provider actually returns.
