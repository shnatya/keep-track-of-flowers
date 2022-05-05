class AddTypeSpeciesToFlowers < ActiveRecord::Migration[7.0]
  def change
    add_column :flowers, :type_species, :string
  end
end
