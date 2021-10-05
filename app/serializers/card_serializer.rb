class CardSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :subject, :studied, :mastered, :user_id
  belongs_to :user
end
