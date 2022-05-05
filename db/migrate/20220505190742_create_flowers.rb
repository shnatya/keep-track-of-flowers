class CreateFlowers < ActiveRecord::Migration[7.0]
  def change
    create_table :flowers do |t|
      t.string :type
      t.string :name
      t.string :season
      t.string :subseason
      t.string :color
      t.string :height
      t.text :description
      t.references :user, null: false, foreign_key: true
      t.string :image_url

      t.timestamps
    end
  end
end
