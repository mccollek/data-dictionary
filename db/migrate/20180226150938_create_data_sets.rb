class CreateDataSets < ActiveRecord::Migration[5.1]
  def change
    create_table :data_sets do |t|
      t.string :name
      t.boolean :production
      t.date :data_starts
      t.date :data_ends
      t.references :data_source, foreign_key: true

      t.timestamps
    end
  end
end
