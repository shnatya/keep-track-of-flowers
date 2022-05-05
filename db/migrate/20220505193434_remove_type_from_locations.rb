class RemoveTypeFromLocations < ActiveRecord::Migration[7.0]
  def change
    remove_column :locations, :type, :string
  end
end
