class Bookshelf < ActiveRecord::Base

  validates :name, :user, presence: true

  belongs_to :user
  has_many :bookshelf_books
  has_many :books, through: :bookshelf_books

end
