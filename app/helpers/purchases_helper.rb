module PurchasesHelper
  def purchased_from(purchase)
    purchase.purchased_from.nil? ? "" : "(#{purchase.purchased_from})"
  end
end
