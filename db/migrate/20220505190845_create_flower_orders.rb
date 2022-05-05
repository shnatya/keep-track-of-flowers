class CreateFlowerOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :flower_orders do |t|
      t.integer :year
      t.references :flower, null: false, foreign_key: true

      t.timestamps
    end
  end
end
