class CreateLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :description
      t.string :image_url

      t.timestamps
    end
  end
end
