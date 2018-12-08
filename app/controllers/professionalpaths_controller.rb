class ProfessionalpathsController < ApplicationController

    def index
        @professionalpaths = Professionalpath.all
        json_response(@professionalpaths)
    end

    def new
        params.require([:name, :title, :description, :contact])

        @entry = Professionalpath.new(name:        params[:name],
                                      title:       params[:title],
                                      description: params[:description],
                                      contact:     params[:contact])
        @entry.save
        head 200
    end

    def destroy
        begin
            params.require(:id)

            pp_id = params[:id]
            @rec = Professionalpath.find(pp_id)
            @rec.destroy
            head 200
        rescue ActiveRecord::RecordNotFound
            json_response("/Couldn't find Professionalpath/", 404);
        end
    end

    def update
        begin
            params.require(:id)

            pp_id = params[:id]
            @rec = Professionalpath.find(pp_id)
            @rec.update_attributes(params.permit(:name, 
                                                 :title, 
                                                 :description, 
                                                 :contact))
            head 200
        rescue ActiveRecord::RecordNotFound
            json_response("/Couldn't find Professionalpath/", 404);
        end
    end

end
