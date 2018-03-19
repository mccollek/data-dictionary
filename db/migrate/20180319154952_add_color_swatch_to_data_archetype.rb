class AddColorSwatchToDataArchetype < ActiveRecord::Migration[5.1]
  def change
    add_column :data_archetypes, :color_swatch, :string
  end
end
