class CreateDataSetArchetypes < ActiveRecord::Migration[5.1]
  def change
    create_table :data_set_archetypes do |t|
      t.references :data_set, foreign_key: true
      t.references :data_archetype, foreign_key: true

      t.timestamps
    end
  end
end
