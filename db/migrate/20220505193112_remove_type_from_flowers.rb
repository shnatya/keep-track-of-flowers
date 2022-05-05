class RemoveTypeFromFlowers < ActiveRecord::Migration[7.0]
  def change
    remove_column :flowers, :type, :string
  end
end
