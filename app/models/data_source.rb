class DataSource < ApplicationRecord
  REFRESH_FREQUENCIES = ['Real-Time', 'Daily','Weekly','Monthly', 'Other (See Notes)', 'Not Updated']
  has_many :data_sets, dependent: :destroy
  accepts_nested_attributes_for :data_sets, allow_destroy: true
  validates :name, uniqueness: { case_sensitive: false }, presence: true
  validates_inclusion_of :refresh_frequency, :in => REFRESH_FREQUENCIES

  def self.refresh_frequency_options
    REFRESH_FREQUENCIES
  end
end
