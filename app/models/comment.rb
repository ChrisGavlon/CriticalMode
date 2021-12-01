class Comment < ApplicationRecord
    belongs_to :review
    belongs_to :user

    validates :body, presence: true
    validates :body, length: { maximum: 500, too_long: "You are over the 500 character limit!" }
end
