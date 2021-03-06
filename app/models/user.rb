class User < ActiveRecord::Base

  validates :password_digest, :session_token, presence: true
  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password
  after_initialize :ensure_session_token

  has_many :bookshelves
  has_many :shelved_books,
    through: :bookshelves,
    source: :books
  has_many :read_status_books
  has_many :status_books,
    through: :read_status_books,
    source: :book
  has_many :read_statuses, through: :read_status_books
  has_many :reviews


  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save
    self.session_token
  end

end
