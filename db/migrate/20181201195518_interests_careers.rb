class InterestsCareers < ActiveRecord::Migration[5.0]
  def change
	drop_table :careers_interests, if_exists: true
	create_table :careers_interests, id: false do |t|
		t.belongs_to :career, index: true
		t.belongs_to :interest, index: true
	end
  end
end
