class DataSource < ApplicationRecord
  REFRESH_FREQUENCIES = ['Real-Time', 'Daily','Weekly','Monthly', 'Other (See Notes)', 'Not Updated']
  has_many :data_sets, dependent: :destroy
  validates :name, uniqueness: { case_sensitive: false }, presence: true
  validates_inclusion_of :refresh_frequency, :in => REFRESH_FREQUENCIES
end
