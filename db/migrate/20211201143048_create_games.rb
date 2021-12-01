class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :title
      t.string :img
      t.string :developer
      t.string :genre

      t.timestamps
    end
  end
end
