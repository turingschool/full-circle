class User < ApplicationRecord
  has_secure_password

  enum :role ['student', 'reviewer', 'admin']
end