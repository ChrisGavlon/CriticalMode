class User < ApplicationRecord
    has_many :reviews
    has_many :comments
    has_secure_password

    validates :username, presence: true
    validates :username, uniqueness: true
    validates :prof_img, presence: true
    validates :bio, presence: true
    validates :bio, length: {in: 1..50}
end
