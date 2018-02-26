class DataSource < ApplicationRecord
  has_many :data_sets, dependent: :destroy
end
