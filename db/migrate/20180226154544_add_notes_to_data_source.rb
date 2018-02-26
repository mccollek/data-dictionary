class AddNotesToDataSource < ActiveRecord::Migration[5.1]
  def change
    add_column :data_sources, :description, :text
    add_column :data_sources, :notes, :text
  end
end
