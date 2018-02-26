class DataSet < ApplicationRecord
  belongs_to :data_source
  has_many :data_set_archetypes
  has_many :data_archetypes, through: :data_set_archetypes
  has_many :data_elements
end
