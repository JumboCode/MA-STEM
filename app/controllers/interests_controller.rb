class InterestsController < ApplicationController
  before_action :set_interest, only: [:show, :update, :destroy]

  # GET /interests
  def index
    @interests = Interest.all

    render json: @interests
  end

  # GET /interests/1
  def show
    render json: @interest
  end

  # POST /interests
  def create
    @interest = Interest.new(interest_params)

    if @interest.save
      render json: @interest, status: :created, location: @interest
    else
      render json: @interest.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /interests/1
  def update
    if @interest.update(interest_params)
      render json: @interest
    else
      render json: @interest.errors, status: :unprocessable_entity
    end
  end

  # DELETE /interests/1
  def destroy
    @interest.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_interest
      @interest = Interest.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def interest_params
      params.fetch(:interest, {})
    end
end
