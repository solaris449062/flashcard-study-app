class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string :title
      t.string :content
      t.string :subject
      t.boolean :studied
      t.boolean :mastered
      t.integer :user_id

      t.timestamps
    end
  end
end
