class CreateDataArchetypes < ActiveRecord::Migration[5.1]
  def change
    create_table :data_archetypes do |t|
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
