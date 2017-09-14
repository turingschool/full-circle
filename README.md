[![Build Status](https://travis-ci.org/turingschool/full-circle.svg?branch=master)](https://travis-ci.org/) [![Code Climate](https://codeclimate.com/github/turingschool/full-circle/badges/gpa.svg)](https://codeclimate.com/github/codeclimate/codeclimate) [![security](https://hakiri.io/github/turingschool/full-circle/master.svg)](https://hakiri.io/github/turingschool/full-circle/master)

# Full Circle
### Turing's Diversity Scholarship Application

This application assists in streamlining and automating the application process for Turing's Diversity Scholarship Program.

### Dependencies
- Ruby 2.4.1
- Rails 5.1.3
- React 2.2.1

### Setup
If you don't have ruby 2.4.1 or greater first install this using your Ruby version manager of choice: $ `rvm install 2.4.1`

Now: $ `git clone https://github.com/turingschool/full-circle.git`

Run $ `bundle update`. If all goes well setup the database:

$ `rake db:create db:migrate` and optionally:

$ `rake db:seed`

Install figaro: $ `bundle exec figaro install` and then add to the created application.yml file your Github OAuth credentials:
```Ruby
GITHUB_CLIENT_ID:
GITHUB_CLIENT_SECRET:
```

Finally, run the test suite: $ `rspec`

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
- config/initializers/omniauth.rb
- app/models/concerns/oauth_user.rb
- app/controllers/concerns/authorize.rb
- app/controllers/session_controller.rb

OAuth happens right now via the omniauth gem with a github provider **(found in the omniauth.rb config file)**. The hope is this will make moving to the Census provider somewhat painless.

When a user clicks on the login button on the homepage this initiates the Github callback loop. When a user is Authorized they are rerouted through the session_controller. When a session is created a user is then rerouted based on their role **(found in authorize.rb)**

A user in the Full Circle database will maintain state with the OAuth provider. If they change their name on Github, it will also change in Full Circle. When a user logs in, all information is updated in this way from the provider. This information can be found in oauth_params in oauth_user.rb. When a change is needed for the User model's attributes, these can be updated here and should not effect anything else.

#### User Authorization
> Files that include Authorization
- controller/concerns/authorize.rb
- app/controllers/api_controller.rb
- app/controllers/application_controller.rb

Because this is a Rails-React app user Authorization happens in two places in two ways:

1. When a user logs in via the homepage and a new session is created the user is authorized before rerouting to the correct dashboard. All users are defaulted to a student. **Rerouting and user checks can be found in authorize.rb**.

2. Prior to a user entering a dashboard the user is converted to a JWT token **(found in application_controller.rb)** and stored in the dashboard as 'user'. This is then used for all calls to the API side of the app. The user token is sent in a header as `Authorization: Bearer <token>`. On the api side this comes in as `request.env['HTTP_AUTHORIZATION']` **(found in api_controller.rb)**. Once the token is decoded the user is then found from the database and scoping of the role can be achieved by calling user.<role>?.

This is mostly unneeded in the sense that a User is already Authorized when they log in. However, it is needed in order to protect the API from 3rd party entry. When and if the API needs to be opened up basic protection now exists.

## Testing

This section covers some of what is in the testing suite that may not be obvious. Testing React in a Rails environment isn't awesome and requires a few extra hurdles to jump through.

> The testing environment uses RSpec and Capybara with Poltergeist to handle Phantomjs. It's slow, but easy to write and easy to test and does not require any additional setup on your end.

> All testing configs for middle-wear will be found in rails_helper.rb. This includes Shoulda-Matchers, Capybara/Poltergeist, and Omniauth

Unit and Integration testing covers most Ruby written code, and is fairly straight forward. Feature testing covers some higher level functionality on the user's end. To reduce test maintenance they try to stay vague enough that changes to css or DOM elements will not effect it. But, inevitably changes on the user's end will probably break something. Listed here are those areas that might be suspect.

#### User authentication and authorization

> features/homepage/user_can_log_in_spec.rb

Omniauth mocks a user's credentials and fakes a callback authentication with a provider. What Omniauth returns is found in the rails_helper.rb under Omniauth.config. If a different provider is used you may need to update these to match what the provider actually returns.

