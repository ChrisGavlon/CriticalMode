class Review < ApplicationRecord
    belongs_to :user
    belongs_to :game
    has_many :comments

    validates :score, presence: true
    validates :score, numericality: { only_integer: true }
    validates :title, presence: true
    validates :title, length: { maximum: 50, too_long: "Title must be under 50 characters!"}
    validates :body, presence: true
end
