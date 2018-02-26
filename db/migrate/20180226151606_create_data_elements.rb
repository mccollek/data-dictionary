class CreateDataElements < ActiveRecord::Migration[5.1]
  def change
    create_table :data_elements do |t|
      t.string :name
      t.references :data_set, foreign_key: true

      t.timestamps
    end
  end
end
