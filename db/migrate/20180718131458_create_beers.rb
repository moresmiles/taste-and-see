class CreateBeers < ActiveRecord::Migration[5.1]
  def change
    create_table :beers do |t|
      t.string :name
      t.string :style
      t.integer :rating
      t.string :notes
      t.integer :user_id
      t.timestamps
    end
  end
end
