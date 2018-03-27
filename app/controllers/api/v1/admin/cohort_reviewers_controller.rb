class Api::V1::Admin::CohortReviewersController < Api::V1::AdminApiController
  before_action :get_cohort
  before_action :get_reviewer, only: [:create, :destroy]

  def index
    # TODO(srt32): add serialization layer here
    render json: @cohort.reviewers
  end

  def update
    reviewer = User.find(params[:id])

    if @cohort.users << reviewer
      render json: reviewer, status: 200
    else
      render json: { "error"=>"Error Creating Cohort Reviewer" }, status: 400
    end
  end

  def destroy
    cohort_reviewer = CohortReviewer.find_by(
      user_id: @reviewer.id, cohort_id: @cohort.id)

    if cohort_reviewer.destroy
      render json: cohort_reviewer.user, status: 200
    else
      render json: { "error"=>"Error Delete Cohort Reviewer" }, status: 400
    end
  end

  private

    def get_cohort
      @cohort = Cohort.find(params[:cohort_id])
    end

    def get_reviewer
      @reviewer = User.find(params[:id])
    end
end
