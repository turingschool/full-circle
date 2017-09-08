class User < ApplicationRecord


  enum role: [:student, :reviewer, :admin]
end