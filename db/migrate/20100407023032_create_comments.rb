class CreateComments < ActiveRecord::Migration
  def self.up
    create_table :comments do |t|
      t.text :text
      t.string :profile_image_url
      t.string :from_user
      t.integer :movie_id

      t.timestamps
    end
  end

  def self.down
    drop_table :comments
  end
end
