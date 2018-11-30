class CreateCareers < ActiveRecord::Migration[5.0]
  def change
    create_table :careers do |t|

      t.timestamps
    end
  end
end
