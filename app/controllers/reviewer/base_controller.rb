class Reviewer::BaseController < ApplicationController
  before_action :authorize_reviewer!
end
