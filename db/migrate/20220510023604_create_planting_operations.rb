class CreatePlantingOperations < ActiveRecord::Migration[7.0]
  def change
    create_table :planting_operations do |t|
      t.references :flower, null: false, foreign_key: true
      t.references :location, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
