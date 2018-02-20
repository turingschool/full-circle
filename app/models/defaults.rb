class Defaults

  class << self
    def essay_limit
      1200
    end

    def questions
      "<h4>Please answer the following four questions in your essay:</h4>
      <ol>
        <li><bold>1.</bold> Tell us the story of how you became interested in a career in
        software development.</p>
        <li><bold>2.</bold> Share something you would be passionate about contributing to the
        world in the next five years.</p>
        <li><bold>3.</bold> Share a challenge/situation you have experienced that you believe
        was based on your status as a person in an underrepresented group and how
        you overcame that challenge or handled that situation.</p>
        <li><bold>4.</bold> Describe your financial barriers and how participation in this
        scholarship program could impact your ability to pursue education at
        Turing and a career in software development.</p>
      </ol>"
    end

    def guidelines(cohort)
      "<h2>Turing School of Software & Design Diversity Scholarship Guidelines</h2>
      <br></br>
      
      <p>Turing stands for the inclusion and equality of all people, regardless of race, gender, sexual orientation, age, zip code, background, or life experience. When we look at the tech industry overall, though, we see significant biases and a lot of missing faces. So many amazing people who could make monumental contributions to software development have not yet entered the field. This needs to change.</p>
      <p>People build software to solve problems, but we tend to only solve problems when we know they exist. Until the experiences of all software developers begin to mirror the experiences of all software users, real problems will remain unsolved and real needs will remain unmet. If you don’t see yourself as fitting some “typical software developer mold”, then you are exactly who we need. We want you to study at Turing precisely because you break the mold. Your differences are valuable.</p>
      <p>At Turing School, we want to do what we can to address whatever is holding you back; whether it’s a lack of role models, an unwelcoming and exclusive culture in the industry, unhelpful policies, limited exposure to technology, or simply not realizing what a great fit you might be. We know there are some things we can’t change, but we are committed to accomplishing what we can. Let’s start with access to an unsurpassed education and build a community together. We’ll help you form a support network, connect you with mentors, and stand with you as you launch and grow your career.</p>
      <p>One thing we can do right now is help with the cost. In July 2015, we launched our first ever scholarship program for women. Today, we’ve expanded the scholarship program to include all underrepresented groups. We have two scholarships available at $4,000/each for every cohort for each program. If you belong to any group that is underrepresented in technology and you have been accepted to study at Turing, we invite you to apply.</p>
      
      <br></br>
      <h3>Eligibility and Deadlines for Diversity Scholarships</h3>
      <p>Scholarship applicants must be accepted into the Turing School of Software & Design
      for the #{cohort.title} cohort, which begins #{cohort.start_date.strftime("%B %d, %Y")}
      and meet the following qualifications:</p>
      <ol>
        <li><bold>1.</bold> Identify as a member of at least one group that is underrepresented in
        technology (e.g.   Black,   Latinx,   Indigenous,   Pacific   Islander,   Woman,   LGBTQ+, disabled,   veteran)</li>
        <li><bold>2.</bold> Be accepted into the school and commit to the #{cohort.title} cohort, which starts on
        #{cohort.start_date.strftime("%B %d, %Y")}.</li>
        <li><bold>3.</bold> Complete a brief (approximately 1000 words) scholarship
        essay (below). Our scholarship panel will award scholarships based on your
        essay response (<bold>passion</bold>, <bold>determination</bold>, and <bold>financial need</bold>). Scholarship
        essays are due by midnight on #{cohort.close_date.strftime("%B %d, %Y")}.</li>
      </ol>
      
      <br></br>
      <h3>How much are the Scholarships Worth?</h3>
      <p>Scholarships will be awarded in the form of tuition waivers of $4,000 to be applied to
      your first day payment. Combined with Turing’s deferment options, scholarships will
      allow recipients to start at Turing for as little as $1,000.
      
      <br></br>
      <h3>Scholarship Program Essay (Due #{cohort.close_date.strftime("%B %d, %Y")} at Midnight)</h3>
      <p>The purpose of this essay is to allow the scholarship panel to learn more about you, to
      better understand your passion and determination to become a programmer, and to
      understand your relative financial need.</p>
      <ol>
        <li><bold>1.</bold> In 200-300 words, please tell us the story of how you became interested in a
        career in software development.</li>
        <li><bold>2.</bold> In 200-300 words, please share something you would be passionate about
        contributing to the world in the next five years.</li>
        <li><bold>3.</bold> In 200-300 words, please share a challenge/situation you have experienced that
        you believe was based on your status as a person in an underrepresented group
        and how you overcame that challenge or handled that situation.</li>
        <li><bold>4.</bold> In 200-300 words, please describe your financial barriers and how participation in
        this scholarship program could impact your ability to pursue education at Turing
        and a career in software development.</li>
      </ol>
      
      <br></br>
      <h3>Formatting</h3>
      <p>Do not rewrite questions in your essay. Each question should be answered in
      paragraph form for a total of four paragraphs.</p>
      <p>Do not write your name at the top of the essay. Do not add headers or footers
      with your name. The committee reads these without knowing names.</p>
      
      <br></br>
      <h3>How will scholarship recipients be selected?</h3>
      <p>Turing scholarships will be awarded by a panel drawn from Turing staff. Scholarship levels will be based on demonstration of passion, dedication, and relative financial need as demonstrated in essay responses.</p>
      
      <br></br>
      <h3>When will finalists be notified?</h3>
      <p>Scholarship finalists will be notified by #{cohort.notify_date.strftime("%A, %B %d, %Y")}.</p>
      
      <br></br>
      <h3>Scholarship Program Terms & Conditions</h3>
      <ol>
        <li><bold>1.</bold> Scholarships are offered in the form of tuition waivers and have no cash value. If
        the scholarship recipient is unable to complete the program for any reason, no
        refund of the waived amount will be offered. Waived tuition is only available for
        general tuition; repeated modules or other special circumstances are not eligible
        for this scholarship program and will be covered under Turing’s general tuition
        policies. Scholarships may not be combined with any other tuition credits,
        scholarships, or discounts.</li>
        <li><bold>2.</bold> By applying for admission to Turing and the Scholarship program, you certify that
        your answers are true and complete to the best of your knowledge and
        acknowledge that providing false or misleading information at any stage of the
        application process may result in disqualification from the scholarship program
        and/or removal from Turing School. Incomplete applications will not be
        considered.</li>
        <li><bold>3.</bold> Scholarships are subject to the availability of funds and based on satisfaction of
        all terms and conditions.</li>
        <li><bold>4.</bold> By participating in the scholarship program, you authorize Turing School to
        publically announce your scholarship, and share your image, story, and quotes
        for marketing purposes online or in print independently or in conjunction with
        partner organizations.</li>
        <li><bold>5.</bold> Scholarship may be withdrawn if candidate is awarded a scholarship and fails to
        sign the enrollment contract and pay the $1,000 deposit required of all students.</li>
        <li><bold>6.</bold> Scholarship may be withdrawn if the candidate withdraws from Turing.</li>
        <li><bold>7.</bold> Scholarship may be withdrawn if the candidate violates Turing’s Student Conduct
        Policy.</li>
        <li><bold>8.</bold> Students are responsible for cost of living and relocation.</li>"
    end
  end
end