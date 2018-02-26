class DataElementsController < ApplicationController
  before_action :set_data_element, only: [:show, :edit, :update, :destroy]

  # GET /data_elements
  # GET /data_elements.json
  def index
    @data_elements = DataElement.all
  end

  # GET /data_elements/1
  # GET /data_elements/1.json
  def show
  end

  # GET /data_elements/new
  def new
    @data_element = DataElement.new
  end

  # GET /data_elements/1/edit
  def edit
  end

  # POST /data_elements
  # POST /data_elements.json
  def create
    @data_element = DataElement.new(data_element_params)

    respond_to do |format|
      if @data_element.save
        format.html { redirect_to @data_element, notice: 'Data element was successfully created.' }
        format.json { render :show, status: :created, location: @data_element }
      else
        format.html { render :new }
        format.json { render json: @data_element.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /data_elements/1
  # PATCH/PUT /data_elements/1.json
  def update
    respond_to do |format|
      if @data_element.update(data_element_params)
        format.html { redirect_to @data_element, notice: 'Data element was successfully updated.' }
        format.json { render :show, status: :ok, location: @data_element }
      else
        format.html { render :edit }
        format.json { render json: @data_element.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /data_elements/1
  # DELETE /data_elements/1.json
  def destroy
    @data_element.destroy
    respond_to do |format|
      format.html { redirect_to data_elements_url, notice: 'Data element was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_data_element
      @data_element = DataElement.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def data_element_params
      params.require(:data_element).permit(:name, :data_set_id)
    end
end
