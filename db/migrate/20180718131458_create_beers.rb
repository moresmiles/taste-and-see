class CreateBeers < ActiveRecord::Migration[5.1]
  def change
    create_table :beers do |t|

      t.timestamps
    end
  end
end
