class SensitivitiesController < ApplicationController
  before_action :set_sensitivity, only: [:show, :edit, :update, :destroy]

  # GET /sensitivities
  # GET /sensitivities.json
  def index
    @sensitivities = Sensitivity.all
  end

  # GET /sensitivities/1
  # GET /sensitivities/1.json
  def show
  end

  # GET /sensitivities/new
  def new
    @sensitivity = Sensitivity.new
  end

  # GET /sensitivities/1/edit
  def edit
  end

  # POST /sensitivities
  # POST /sensitivities.json
  def create
    @sensitivity = Sensitivity.new(sensitivity_params)

    respond_to do |format|
      if @sensitivity.save
        format.html { redirect_to @sensitivity, notice: 'Sensitivity was successfully created.' }
        format.json { render :show, status: :created, location: @sensitivity }
      else
        format.html { render :new }
        format.json { render json: @sensitivity.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /sensitivities/1
  # PATCH/PUT /sensitivities/1.json
  def update
    respond_to do |format|
      if @sensitivity.update(sensitivity_params)
        format.html { redirect_to @sensitivity, notice: 'Sensitivity was successfully updated.' }
        format.json { render :show, status: :ok, location: @sensitivity }
      else
        format.html { render :edit }
        format.json { render json: @sensitivity.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /sensitivities/1
  # DELETE /sensitivities/1.json
  def destroy
    @sensitivity.destroy
    respond_to do |format|
      format.html { redirect_to sensitivities_url, notice: 'Sensitivity was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sensitivity
      @sensitivity = Sensitivity.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def sensitivity_params
      params.require(:sensitivity).permit(:name, :description)
    end
end
