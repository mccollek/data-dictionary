class AddSensitivityToDataSets < ActiveRecord::Migration[5.1]
  def change
    add_reference :data_sets, :sensitivity, foreign_key: true
  end
end
