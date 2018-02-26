class DataArchetypesController < ApplicationController
  before_action :set_data_archetype, only: [:show, :edit, :update, :destroy]

  # GET /data_archetypes
  # GET /data_archetypes.json
  def index
    @data_archetypes = DataArchetype.all
  end

  # GET /data_archetypes/1
  # GET /data_archetypes/1.json
  def show
  end

  # GET /data_archetypes/new
  def new
    @data_archetype = DataArchetype.new
  end

  # GET /data_archetypes/1/edit
  def edit
  end

  # POST /data_archetypes
  # POST /data_archetypes.json
  def create
    @data_archetype = DataArchetype.new(data_archetype_params)

    respond_to do |format|
      if @data_archetype.save
        format.html { redirect_to @data_archetype, notice: 'Data archetype was successfully created.' }
        format.json { render :show, status: :created, location: @data_archetype }
      else
        format.html { render :new }
        format.json { render json: @data_archetype.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /data_archetypes/1
  # PATCH/PUT /data_archetypes/1.json
  def update
    respond_to do |format|
      if @data_archetype.update(data_archetype_params)
        format.html { redirect_to @data_archetype, notice: 'Data archetype was successfully updated.' }
        format.json { render :show, status: :ok, location: @data_archetype }
      else
        format.html { render :edit }
        format.json { render json: @data_archetype.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /data_archetypes/1
  # DELETE /data_archetypes/1.json
  def destroy
    @data_archetype.destroy
    respond_to do |format|
      format.html { redirect_to data_archetypes_url, notice: 'Data archetype was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_data_archetype
      @data_archetype = DataArchetype.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def data_archetype_params
      params.require(:data_archetype).permit(:name, :description)
    end
end
