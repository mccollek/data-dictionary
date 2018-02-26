class DataSet < ApplicationRecord
  belongs_to :data_source
  has_many :data_set_archetypes, dependent: :destroy
  has_many :data_archetypes, through: :data_set_archetypes
  has_many :data_elements, dependent: :destroy
  accepts_nested_attributes_for :data_archetypes, :data_set_archetypes
end
