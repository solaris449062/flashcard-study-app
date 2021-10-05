class Card < ApplicationRecord
    belongs_to :user, optional: true
    # belongs_to :user
    validates :title, presence: true
    validates :content, presence: true
    validates :subject, presence: true
end
