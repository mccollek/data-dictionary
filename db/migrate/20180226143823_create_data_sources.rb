class CreateDataSources < ActiveRecord::Migration[5.1]
  def change
    create_table :data_sources do |t|
      t.string :name
      t.boolean :production
      t.string :refresh_frequency
      t.string :reliability
      t.text :location

      t.timestamps
    end
  end
end
