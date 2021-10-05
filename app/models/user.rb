class User < ApplicationRecord
    has_many :cards
    validates :username, presence: true, uniqueness: true
end
