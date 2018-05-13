class SearchController < ApplicationController
  def index
    @search_term = "%#{params[:q].to_s.downcase}%"
    @search_result = DataSet.where('LOWER(name) LIKE ?', @search_term).map{|result| result.id}
    Rails.logger.info(@search_result)
    render
    # @search_term <<
  end
end
