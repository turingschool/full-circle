class Api::V1::Reviewer::CohortApplicationReviewsController < Api::V1::ReviewerApiController

  def update
    review = Review.find(params[:id])    
    if review.update(review_params)
      render json: review, status: 200
    else
      render json: { "error"=>"Error Updating Application" }, status: 400
    end
  end

  private
    
    def review_params
      params.require(:review).permit({score_card: {}})
    end

end