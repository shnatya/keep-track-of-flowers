class CreatePlantingOperations < ActiveRecord::Migration[7.0]
  def change
    create_table :planting_operations do |t|
      t.references :flower_order, null: false, foreign_key: true
      t.references :location, null: false, foreign_key: true
      t.integer :quantity
      t.string :notes
      t.integer :gardener_id

      t.timestamps
    end
  end
end
