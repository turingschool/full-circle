class CohortSerializer < Api::V1::BaseSerializer
  def initialize(args)
    @close_date = args.close_date
    @created_at = args.created_at
    @end_date = args.end_date
    @essay_limit = args.essay_limit
    @guidelines = args.guidelines
    @id = args.id
    @notify_date = args.notify_date
    @open = args.open
    @open_date = args.open_date
    @questions = args.questions
    @start_date = args.start_date
    @state = args.state
    @title = args.title
    @updated_at = args.updated_at
  end

  def to_json
    {
      close_date: @close_date,
      created_at: @created_at,
      end_date: @end_date,
      essay_limit: @essay_limit,
      guidelines: @guidelines,
      id: @id,
      notify_date: @notify_date,
      open: @open,
      open_date: @open_date,
      questions: @questions,
      start_date: @start_date,
      state: @state,
      title: @title,
      updated_at: @updated_at
    }
  end
end
