class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.text :body
      t.integer :likes
      t.integer :dislikes
      t.integer :user_id
      t.integer :review_id

      t.timestamps
    end
  end
end
