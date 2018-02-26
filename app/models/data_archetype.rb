class DataArchetype < ApplicationRecord
  has_many :data_set_archetypes, dependent: :destroy
  has_many :data_sets, through: :data_set_archetypes
end
