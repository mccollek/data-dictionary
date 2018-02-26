class DataArchetype < ApplicationRecord
  has_many :data_set_archetypes
  has_many :data_sets, through: :data_set_archetypes
end
